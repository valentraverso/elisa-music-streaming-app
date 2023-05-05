import { useState } from "react";
import ReactImageUploading from "react-images-uploading";
import TitleCenterPage from "../../../components/TitleCenterPage/TitleCenterPage";
import { SpanDragorClick, PlacerDivUpload, PlacerImageUpload, ContainerUploaderImage, IconNoUploadImage, InputForm, LabelInputForm, ContainerInputs, SpanGenreButton, ContainerButtonsGenre, PViewMore, ButtonAddTrack, SpanDeleteSong, ContainerUpload, ContainerDeleteSong, ButtonUploadAlbum, ContainerUploadButton } from "../../../Styles/Pages/Users/UploadStyle";
import { AiOutlineDelete } from 'react-icons/ai';
import UseWidth from "../../../../utils/hooks/useWidth";
import { links } from "../../../config.links";

export function Upload() {
  const width = UseWidth();

  const [imageUpload, setImageUpload] = useState();
  const [songsUpload, setSongsUpload] = useState([]);

  const handlerImageUpload = (imageList) => {
    setImageUpload(imageList);
  }

  const handlerSongsUpload = (songList) => {
    setSongsUpload(songList);
  }

  return (
    <ContainerUpload>
      {
        width !== 'desktop' &&
        <TitleCenterPage title='Upload' back={true} link={links.library} />
      }
      <ReactImageUploading
        value={imageUpload}
        onChange={handlerImageUpload}
        acceptType={['jpg', 'gif', 'png', 'webp']}
        dataURLKey="albumImgURL"
      >
        {
          ({ imageList,
            onImageUpload,
            onImageRemove,
            errors,
            dragProps,
            isDragging }) => {
            return (
              <ContainerUploaderImage>
                <PlacerDivUpload onClick={onImageUpload} {...dragProps}>
                  {
                    imageUpload ?
                      <PlacerImageUpload src={imageUpload[0].albumImgURL} />
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
      <ContainerInputs>
        <LabelInputForm htmlFor='albumTitle'>Album title</LabelInputForm><br />
        <InputForm type='text' name='albumTitle' />
      </ContainerInputs>
      <ContainerInputs>
        <LabelInputForm>Genre</LabelInputForm><br />
        <ContainerButtonsGenre>
          <SpanGenreButton>Rock</SpanGenreButton>
          <SpanGenreButton>Pop</SpanGenreButton>
          <SpanGenreButton>Hip Hop</SpanGenreButton>
          <SpanGenreButton>Reggaeton</SpanGenreButton>
          <SpanGenreButton>Indie</SpanGenreButton>
          <SpanGenreButton>Rap</SpanGenreButton>
        </ContainerButtonsGenre>
        <PViewMore>View more</PViewMore>
      </ContainerInputs>
      <ContainerInputs>
        <ReactImageUploading
          value={songsUpload}
          onChange={handlerSongsUpload}
          acceptType={['mp3']}
          dataURLKey="songURL"
          allowNonImageType
          multiple
        >
          {
            ({ imageList: songList,
              onImageUpload: onSongUpload,
              onImageRemove: onSongRemove,
              errors,
            }) => {
              return (
                <>
                  <ButtonAddTrack onClick={onSongUpload}>Add track</ButtonAddTrack>
                  {
                    songsUpload.map((song, index) => {
                      return (
                        <div key={index}>
                          <ContainerInputs>
                            <LabelInputForm htmlFor={`file-${index}`}>File</LabelInputForm><br />
                            <InputForm type='text' value={song.file.name} name={`file-${index}`} />
                          </ContainerInputs>
                          <ContainerInputs>
                            <LabelInputForm htmlFor={`songTitle-${index}`}>Song Title</LabelInputForm><br />
                            <InputForm type='text' name={`songTitle-${index}`} maxLength={50} />
                          </ContainerInputs>
                          <ContainerInputs>
                            <LabelInputForm htmlFor={`songFeat-${index}`}>Feat</LabelInputForm><br />
                            <InputForm type='text' name={`songFeat-${index}`} maxLength={50} />
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
      </ContainerInputs>
      {
        songsUpload.length >= 1 &&
        <ContainerUploadButton>
          <ButtonUploadAlbum>Upload</ButtonUploadAlbum>
        </ContainerUploadButton>
      }
    </ContainerUpload>
  )
}
