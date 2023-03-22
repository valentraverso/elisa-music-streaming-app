import { useState } from "react";
import ReactImageUploading from "react-images-uploading";
import TitleCenterPage from "../../../components/TitleCenterPage/TitleCenterPage";
import { SpanDragorClick, PlacerDivUpload, PlacerImageUpload, ContainerUploaderImage, IconNoUploadImage, InputForm, LabelInputForm, ContainerInputs } from "../../../Styles/Pages/Users/UploadStyle";

export function Upload() {
  const [imageUpload, setImageUpload] = useState();

  const handlerImageUpload = (imageList) => {
    setImageUpload(imageList);
  }

  console.log(imageUpload)

  return (
    <>
      <TitleCenterPage title='Upload' back={true} link='/library' />
      <ReactImageUploading
        value={imageUpload}
        onChange={handlerImageUpload}
        acceptType={['jpg', 'gif', 'png', 'webp']}
        dataURLKey="albumImgUrl"
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
                      <PlacerImageUpload src={imageUpload[0].albumImgUrl} />
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
        <LabelInputForm for='albumTitle'>Album title</LabelInputForm><br />
        <InputForm type='text' name='albumTitle' />
      </ContainerInputs>
      <LabelInputForm for='albumTitle'>Genre</LabelInputForm><br />
    </>
  )
}
