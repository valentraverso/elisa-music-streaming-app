import { useState } from "react";
import ReactImageUploading from "react-images-uploading";
import TitleCenterPage from "../../../components/TitleCenterPage/TitleCenterPage";
import { SpanDragorClick, PlacerDivUpload, PlacerImageUpload, ContainerUploaderImage, IconNoUploadImage } from "../../../Styles/Pages/Users/UploadStyle";

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
        dataURLKey="album_img_url"
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
                      <PlacerImageUpload src={imageUpload[0].album_img_url} />
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
      
    </>
  )
}
