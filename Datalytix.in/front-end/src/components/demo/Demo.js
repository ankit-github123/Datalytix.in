import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Spinner from "../../Spinner/LoadingSpinner";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import pic from "../../Datalytix Vectors/PNGs/demoPage.webp";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import person from "../../assets/images/demo/person.PNG";
import suit from "../../assets/images/demo/suitcase.PNG";
import phone from "../../assets/images/demo/suitcase.PNG";
import message from "../../assets/images/demo/message.PNG";
import org from "../../assets/images/demo/organisation.PNG";
import drop from "../../assets/images/demo/drop.PNG";

import "./demo.css";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];
var currentOffset,ISTOffset,ISTTime,hoursIST,minutesIST,date,d,dayName;
const timeset = () => {
   d = new Date();
 date = d.getDate();
dayName = days[d.getDay()];
 currentOffset = d.getTimezoneOffset();
 ISTOffset = 330; 
 ISTTime = new Date(d.getTime() + (ISTOffset + currentOffset)*60000);
 hoursIST = ISTTime.getHours();
 minutesIST = ISTTime.getMinutes();
}


const Demo = () => {
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
  let history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [name,setname]=useState('');
  const [orgi,setorg]=useState('');
  const [email,setemail]=useState('');
  const [phoneno,setphone]=useState(Number);
  const [options,setoption]=useState('');
  const [msg,setmsg]=useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setoption(event.target.value);
   
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClickTodo =async (e) => {
    e.preventDefault();
    // const isvalid = validatetitle();
    
  if(true) {
    console.log(name,orgi,email,phoneno,options,msg)
    timeset();
  try {
    setIsLoading(true);


  const response = await fetch("https://datalytix.herokuapp.com/subscriber",{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',

  },
  body : JSON.stringify({
    name:name,
    
    email:email,
   
    option:options,
   
    time:monthNames[d.getMonth()]+" "+date+" "+dayName+" "+hoursIST+":"+minutesIST+" IST"
  })
  });
  
  const responseData = await response.json();
  console.log(responseData,"Sssssssssssssssssssssssss");
  if(!response.ok) {
  
  window.alert(responseData.message);
  throw new Error(responseData.message);
  }
  // UserManageHandle(responseData);
  // setresponse(responseData);
  
  
  
  setIsLoading(false);
  }catch(err) {
  console.log(err,"sssssssssssscccccccccccccccccccccccccccc");
  
  setIsLoading(false);
  } 
  }
  history.push(`/modules_demo`);
  }


  return (
    <div className="Demo_main fixed_header_margintop">
      <div className="container">
      <div className="res_title">
        <h3>
          We classify the sentiments of the articles where the concerned brand name has appeared. Using our propriety 
          NLP algorithm, we are able to quantify the sentiments that act as a brand indicator.
        </h3>
      </div>
        <div className="row demo_contain">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 part1_demo">
            <div style={{ margin: "auto",textAlign:"center"}}>
              <div>
              <img src={pic} alt="analytix" />
              </div>
              <div className="demo_info_img_bottom">
                Datalytix uses over 300 unique alternative data signals to find
                the right answers and provide you with a different perspective
                to drive increased yields and revenue.
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 part2_demo">
          {isLoading && <Spinner asOverlay/>}
            <div className="demo_right">
              <div className={classes.margin}>
                <Grid container spacing={3} alignItems="flex-end">
                  <Grid item>
                    <div>
                      <img src={person} alt="person" />
                    </div>
                  </Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="Full Name"
                      className="name_input"
                      onChange={(e)=>{setname(e.target.value)}}
                    />
                  </Grid>
                </Grid>
                {/* <Grid container spacing={3} alignItems="flex-end">
                  <Grid item>
                    <div>
                      <img src={suit} alt="person" />
                    </div>
                  </Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="Organiation"
                      className="name_input"
                      onChange={(e)=>{setorg(e.target.value)}}
                    />
                  </Grid>
                </Grid> */}
                <Grid container spacing={3} alignItems="flex-end">
                  <div className="org">
                    <img src={org} alt="person" />
                  </div>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="Email"
                      className="name_input org_text"
                      onChange={(e)=>{setemail(e.target.value)}}
                    />
                  </Grid>
                </Grid>
                {/* <Grid container spacing={3} alignItems="flex-end">
                  <Grid item>
                    <div>
                      <img src={phone} alt="person" />
                    </div>
                  </Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="Mobile Number"
                      className="name_input"
                      onChange={(e)=>{setphone(e.target.value)}}
                    />
                  </Grid>
                </Grid> */}
              </div>
              <div className="dropdown_demo">
                <div className="drop_img">
                  <img src={drop} alt="person" />
                </div>
                <FormControl className={classes.formControl+" form_option"}>
                  <InputLabel
                    className="drop_text"
                    id="demo-controlled-open-select-label"
                  >
                    How Did You Hear About Us
                  </InputLabel>
                  
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={options}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"LinkedIn"}>LinkedIn</MenuItem>
                    <MenuItem value={"Twitter"}>Twitter</MenuItem>
                    <MenuItem value={"Google"}>Google</MenuItem>
                    <MenuItem value={"Email"}>Email</MenuItem>
                    <MenuItem value={"Blog"}>Blog</MenuItem>
                    <MenuItem value={"Event"}>Event</MenuItem>
                    <MenuItem value={"Word of Mouth"}>Word of Mouth</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {/* <div className="">
              <div className="mesage_img">
                  <img src={message} alt="person" />
                </div>
                <TextField
                  className="multi_line_message"
                  id="standard-textarea"
                  label="Message"
                  onChange={(e)=>setmsg(e.target.value)}
                  multiline
                />
              </div> */}
              <div className="demo_button_container">
                
                <button onClick={(e) => handleClickTodo(e)} style={{borderRadius:"4px"}} className="demo-but">SUBMIT<span className="try_us_buttn"></span></button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
