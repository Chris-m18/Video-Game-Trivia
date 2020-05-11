const getOptions = async () => {
  const url = "https://opentdb.com/api.php?amount=10&category=15"

  try {
    const response = await axios.get(url)
  
    

 console.log(getOptions)
    
   
  } catch (error) {
    console.log(`${error}`)
  }
  console.log(response.results)
}


