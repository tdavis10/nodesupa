import { createClient } from '@supabase/supabase-js'
import express from "express";

//App Setup
let app = express();
const port = 3000;
app.use(express.urlencoded({ extended : true}));
app.set("view engine", "ejs");

//Supabase Connection
const SUPABASE_URL = 'https://prmruxrcrzbnuqxmigve.supabase.co'
const SUPABASE_KEY = 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBybXJ1eHJjcnpibnVxeG1pZ3ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNTM5MzAsImV4cCI6MjAxNDYyOTkzMH0.C2fG6mGEcG-O_sIsJNVKOyWiUAC4CB6eDCAv4Sk0gjo'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)



//Get Data

const { data, error } = await supabase
  .from('users')
  .select('*')
console.log(data)
console.log(error)
//Insert Data


// const { error } = await supabase
//   .from('countries')
//   .insert({ id: 1, name: 'Denmark' })

//Update Data


// const { error } = await supabase
//   .from('countries')
//   .update({ name: 'Australia' })
//   .eq('id', 1)

//Delete Data

// const { error } = await supabase
//   .from('countries')
//   .delete()
//   .eq('id', 1)

//Route Setup
app.get("/", (req, res) => {
    res.render("index", {aDisplay: data});
});


app.listen(port, () => console.log("Started website"));