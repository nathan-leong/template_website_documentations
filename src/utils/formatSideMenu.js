const formatSideMenu = itemName => {
  const splitName = itemName.split("/")
  let formattedName = splitName[splitName.length-1].replace(".md","").toLowerCase().split("-")
  formattedName = formattedName.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  return formattedName.join(" ")
}

export default formatSideMenu