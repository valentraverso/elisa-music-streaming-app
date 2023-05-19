import ReactImageUploading from "react-images-uploading";
import TitleCenterPage from "../../../components/TitleCenterPage/TitleCenterPage";
import { SpanDragorClick, PlacerDivUpload, PlacerImageUpload, ContainerUploaderImage, IconNoUploadImage, InputForm, LabelInputForm, ContainerInputs, SpanGenreButton, ContainerButtonsGenre, PViewMore, ButtonAddTrack, SpanDeleteSong, ContainerUpload, ContainerDeleteSong, ButtonUploadAlbum, ContainerUploadButton, ErrorMessage } from "../../../Styles/Pages/Users/UploadStyle";
import { AiOutlineDelete } from 'react-icons/ai';
import UseWidth from "../../../../helpers/hooks/useWidth";
import { links } from "../../../config.links";
import { useForm, Controller } from "react-hook-form";
import { store } from "../../../../utils/redux/store";
import postAlbum from "../../../../api/albums/postAlbum";
import { useAuth0 } from "@auth0/auth0-react";
import postSong from "../../../../api/song/postSong";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Audio } from 'react-loader-spinner'
import './components/upload.css';

export function Upload() {
  const width = UseWidth();

  const { getAccessTokenSilently } = useAuth0();
  const user = store.getState().user.data;

  const [isUploading, setIsUploding] = useState(false)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control
  } = useForm({
    mode: "all",
    defaultValues: {
      owner: user._id,
      artist: user.name,
      albumTitle: undefined,
      release: undefined,
      imgAlbum: "",
      discography: undefined,
      songsArray: []
    }
  });

  const [imgAlbum] = watch('imgAlbum');
  const songsArray = watch('songsArray');
  const [songInfo, setSongInfo] = useState([])

  const handleTitleInfo = (ev, index) => {
    const newInfo = [...songInfo]
    newInfo[index] = {
      ...newInfo[index],
      title: ev.target.value
    }
    setSongInfo(newInfo)
  }
  const handleFeatInfo = (ev, index) => {
    const newInfo = [...songInfo]
    newInfo[index] = {
      ...newInfo[index],
      feat: ev.target.value
    }
    setSongInfo(newInfo)
  }
  const uploadAlbum = async (data) => {


    const token = await getAccessTokenSilently();

    const album = {
      owner: data.owner,
      artist: data.artist,
      albumTitle: data.albumTitle,
      release: data.release,
      imgAlbum: data.imgAlbum,
      discography: data.discography,
    }
    const uploadAlbumResponse = await postAlbum(album, token);

    const songsArray = [...data.songsArray]
    const songs = songsArray.map((song, index) => ({
      ...song,
      owner: data.owner,
      album: uploadAlbumResponse.data._id,
      artist: data.artist,
      title: songInfo[index].title,
      feat: songInfo[index].feat
    }))
    const uploadSongsResponse = await postSong(songs, token)

    setIsUploding(false);
    navigate(`/album/${uploadAlbumResponse.data._id}`);
  }

  if (isUploading) {
  return (
    <div className="divGeneral">
      <div className="divAudio">
        <div className="audioIcon">
          <Audio
            margin="0 auto"
            height="80"
            width="80"
            radius="9"
            color='green'
            ariaLabel='three-dots-loading'
            wrapperStyle
            wrapperClass
          />
        </div>
        <p>We are uploading your album...</p>
      </div>
    </div>
  )
  }

  return (
    <ContainerUpload>
      <form onSubmit={
        handleSubmit((data) => {
          setIsUploding(true)
          uploadAlbum(data)
        })
      }>
        {
          width !== 'desktop' &&
          <TitleCenterPage title='Upload' back={true} link={links.library} />
        }
        <Controller
          control={control}
          name="imgAlbum"
          rules={{
            required: {
              value: true,
              message: "You need a image for the album banner."
            }
          }}
          render={({ field }) => (
            <ReactImageUploading
              acceptType={['jpg', 'gif', 'png', 'webp']}
              dataURLKey="albumImgURL"
              {...field}
            >
              {
                ({
                  onImageUpload,
                  onImageRemove,
                  errors,
                  dragProps,
                  isDragging }) => {
                  return (
                    <ContainerUploaderImage>
                      <PlacerDivUpload onClick={onImageUpload} {...dragProps}>
                        {
                          imgAlbum ?
                            <PlacerImageUpload src={imgAlbum.albumImgURL} />
                            :
                            <IconNoUploadImage />
                        }

                      </PlacerDivUpload>
                      <SpanDragorClick>Select Image or drag</SpanDragorClick>
                    </ContainerUploaderImage>
                  )
                }
              }
            </ReactImageUploading>
          )}
        />
        {
          errors.imgAlbum &&
          <ErrorMessage>
            {
              errors.imgAlbum.message
            }
          </ErrorMessage>
        }
        <ContainerInputs>
          <LabelInputForm htmlFor='albumTitle'>Album title</LabelInputForm><br />
          <InputForm type='text' name='albumTitle' {
            ...register('albumTitle', {
              required: {
                value: true,
                message: "You need to add a title for the album."
              },
              maxLength: {
                value: 40,
                msg: "The name of the title need to have less than 40 characters."
              },
              minLength: {
                value: 2,
                msg: "The name of the title need to have more than 2 characters."
              }
            })
          } />
          {
            errors.albumTitle?.message &&
            <ErrorMessage>
              {
                errors.albumTitle.message
              }
            </ErrorMessage>
          }
        </ContainerInputs>
        <ContainerInputs>
          <LabelInputForm htmlFor='release'>Release of the album</LabelInputForm><br />
          <InputForm type='date' name='release' {
            ...register('release', {
              required: {
                value: true,
                message: "You need to add a discography for the album."
              },
              maxLength: {
                value: 70,
                msg: "The name of the discography need to have less than 40 characters."
              },
              minLength: {
                value: 2,
                msg: "The name of the discography need to have more than 2 characters."
              }
            })
          } />
          {
            errors.albumTitle?.message &&
            <ErrorMessage>
              {
                errors.albumTitle.message
              }
            </ErrorMessage>
          }
        </ContainerInputs>
        <ContainerInputs>
          <LabelInputForm htmlFor='release'>Discography</LabelInputForm><br />
          <InputForm type='text' name='discography' {
            ...register('discography', {
              required: {
                value: true,
                message: "You need to add the realease of the album."
              }
            })
          } />
          {
            errors.albumTitle?.message &&
            <ErrorMessage>
              {
                errors.albumTitle.message
              }
            </ErrorMessage>
          }
        </ContainerInputs>
        <ContainerInputs>
          <Controller
            control={control}
            name="songsArray"
            render={({ field }) => (
              <ReactImageUploading
                acceptType={['mp3']}
                dataURLKey="songURL"
                allowNonImageType
                maxFileSize={7000000}
                multiple
                {...field}

              >
                {
                  ({
                    imageList: songList,
                    onImageUpload: onSongUpload,
                    onImageRemove: onSongRemove,
                    errors,
                  }) => {
                    return (
                      <>
                        <ButtonAddTrack
                          onClick={onSongUpload}
                          type='button'>Add track</ButtonAddTrack>
                        {
                          songList.map((song, index) => {
                            return (
                              <div key={index}>
                                <ContainerInputs>
                                  <LabelInputForm htmlFor={`file-${index}`}>File</LabelInputForm><br />
                                  <InputForm type='text' value={song.file.name} name={`file-${index}`} />
                                </ContainerInputs>
                                <ContainerInputs>
                                  <LabelInputForm htmlFor={`songTitle-${index}`}>Song Title</LabelInputForm><br />
                                  <InputForm type='text' name={`songTitle-${index}`} maxLength={50} required={true}
                                    onChange={
                                      (ev) => handleTitleInfo(ev, index)
                                    } />
                                </ContainerInputs>
                                <ContainerInputs>
                                  <LabelInputForm htmlFor={`songFeat-${index}`}>Feat</LabelInputForm><br />
                                  <InputForm type='text' name={`songFeat-${index}`} maxLength={50}
                                    onChange={
                                      (ev) => handleFeatInfo(ev, index)
                                    } />
                                </ContainerInputs>
                                <ContainerInputs>
                                  <LabelInputForm>Genre</LabelInputForm><br />
                                  <ContainerButtonsGenre>
                                    <SpanGenreButton disabled>Rock</SpanGenreButton>
                                    <SpanGenreButton disabled>Pop</SpanGenreButton>
                                    <SpanGenreButton disabled>Hip Hop</SpanGenreButton>
                                    <SpanGenreButton disabled>Reggaeton</SpanGenreButton>
                                    <SpanGenreButton disabled>Indie</SpanGenreButton>
                                    <SpanGenreButton disabled>Rap</SpanGenreButton>
                                  </ContainerButtonsGenre>
                                  <PViewMore>View more</PViewMore>
                                </ContainerInputs>
                                <ContainerDeleteSong>
                                  <SpanDeleteSong onClick={() => onSongRemove(index)} >Delete track <AiOutlineDelete /></SpanDeleteSong>
                                </ContainerDeleteSong>
                              </div>
                            )
                          })
                        }
                      </>
                    )
                  }
                }
              </ReactImageUploading>
            )}
          />
        </ContainerInputs>
        {
          songsArray?.length >= 1 &&
          <ContainerUploadButton>
            <ButtonUploadAlbum type="submit">Upload</ButtonUploadAlbum>
          </ContainerUploadButton>
        }
      </form>
    </ContainerUpload>
  )
}
