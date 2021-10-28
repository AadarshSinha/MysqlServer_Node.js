const axios = require('axios');
const express = require('express');
const app = express()
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('Hello There')
})
app.get('/api/languages', async (req,res)=>{
    const response = await axios.get("http://localhost:3000/coding_languages")
                      .catch((err) => {
                          console.log(err)
                          res.send('ERROR')
                      })
    console.log(response.data)
    res.send(response.data)
})
app.get('/api/languages/:id', async (req,res)=>{
    console.log(req.params.id)
    const response = await axios.get(`http://localhost:3000/coding_languages/${req.params.id}`)
                      .catch((err) => {
                          console.log(err)
                          console.log(response)
                          res.send('ERROR')
                          res.end()
                      })
    console.log(response.data)
    res.send(response.data)
})




app.post('/api/languages',async (req,res)=>{
    const obj={
        id:req.body.id,
        language:req.body.language,
        year:req.body.year,
    }
   const response = await axios.post("http://localhost:3000/coding_languages",obj)
   .catch((err)=>{
       console.log(err)
       res.end()
   })
   console.log("success",response.data)
   res.send(response.data)
})




app.put('/api/languages',async (req,res)=>{
    const obj={
        id:req.body.id,
        language:req.body.language,
        year:req.body.year,
    }
    axios.put(`http://localhost:3000/coding_languages/${req.body.id}`,obj)
   .catch((err)=>{
       console.log(err)
       res.end()
   })
   res.send("Success")
})




app.delete('/api/languages',async (req,res)=>{
    const response = await axios.delete(`http://localhost:3000/coding_languages/${req.body.id}`)
   .catch((err)=>{
       console.log(err)
       res.end()
   })
   console.log("success",response.data)
   res.send(response.data)
})


app.listen(2000,() => {console.log("Listining on port 2000...")});
