const loadContent = async (content, setValue) => {
  const downloadFile = await fetch(await content)
  const downloadResponse = await downloadFile.text()
  setValue(downloadResponse)
}

export default loadContent
