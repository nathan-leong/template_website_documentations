import getPresignedUrl from './getPresignedUrl'

const retrieveImagesS3 = () => {
  const matches = document.querySelectorAll("img.s3");
  for (const image of matches) {
    const newSrc = image.src.replace(`${window.location.origin}/${window.location.pathname.split("/")[1]}/`,"")
    getPresignedUrl(newSrc).then(data => image.src = data)
  }
}

export default retrieveImagesS3