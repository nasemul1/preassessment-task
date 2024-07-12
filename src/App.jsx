import { useState } from 'react'
import './App.css'
import { Box, Button, Container, Input, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import Navbar from './Navbar';

function App() {
  const [inst, setInst] = useState('none');
  const [job, setJob] = useState('none');

  const [school, setSchool] = useState('none');
  const [college, setCollege] = useState('none');

  const [cJob, setCJob] = useState('none');

  const handleClickForStud = (index) => {
    setCJob('none');
    setCollege('none');
    setSchool('none');

    if(index == 1){
      setInst('block');
      setJob('none');
    }
    else if(index == 2){
      setInst('none');
      setJob('block');
    }
  }

  const handleClickForInst = (index) => {
    setCJob('none');
    if(index == 1){
      setSchool('block');
      setCollege('none');
    }
    else if(index == 2){
      setSchool('none');
      setCollege('block');
    }
  }

  const handleClickForJob = (index) => {
    setSchool('none');
    if(index == 1){
      setCollege('show');
      setCJob('none');
    }
    else if(index == 2){
      setCollege('none');
      setCJob('show');
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <Box sx={{
        height: '100dvh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Box sx={{
          p: 5,
          border: 1,
          borderColor: '#2196f3',
          borderRadius: '16px',
        }}>
          <form>
            <Box sx={{pb:2}}>
              <Typography variant='h5' sx={{
                pb: 1,
                color: '#2196f3',
                fontWeight: 600
              }}>Are you studying?</Typography>
              <Box sx={{
                display: 'inline-block',
                pr: 2,
              }}>
                <Input type="radio" name="stud" id="yes-stud" onClick={() => handleClickForStud(1)} />
                <InputLabel htmlFor="yes-stud" sx={{
                  display: 'inline-block',
                  pl:1,
                }}>Yes. I am studying.</InputLabel>
              </Box>
              <Box sx={{
                display: 'inline-block'
              }}>
                <Input type="radio" name="stud" id="no-stud" onClick={() => handleClickForStud(2)}/>
                <InputLabel htmlFor="no-stud" sx={{
                  display: 'inline-block',
                  pl:1,
                }}>No. I am not studying.</InputLabel>
              </Box>
            </Box>
            <Box id="job" sx={{ // job status
              display: `${job}`,
              mb: 3
            }}>
              <Typography variant='h5' sx={{
                pb: 1,
                color: '#2196f3',
                fontWeight: 600
              }}>Are you currently?</Typography>
              <Box sx={{
                display: 'inline-block',
                pr: 2,
              }}>
                <Input type="radio" name="job-stat" id="looking" onClick={() => handleClickForJob(1)}/>
                <InputLabel htmlFor="looking" sx={{
                    display: 'inline-block',
                    pl:1,
                  }}>Looking for jobs</InputLabel>
              </Box>
              <Box sx={{display: 'inline-block'}}>
                <Input type="radio" name="job-stat" id="working" onClick={() => handleClickForJob(2)}/>
                <InputLabel htmlFor="working" sx={{
                    display: 'inline-block',
                    pl:1,
                  }}>Currently working</InputLabel>
              </Box>
            </Box>
            <Box id='institute' sx={{ // institute selection
              display: `${inst}`,
              pb: 2,
            }}>
              <Typography variant='h5' sx={{
                pb: 1,
                color: '#2196f3',
                fontWeight: 600
              }}>Are you currently?</Typography>
              <Box sx={{
                display: 'inline-block',
                pr:2,
              }}>
                <Input type="radio" name="inst" id="inst-sch" onClick={() => handleClickForInst(1)}/>
                <InputLabel htmlFor="inst-sch" sx={{
                    display: 'inline-block',
                    pl:1,
                  }}>in School</InputLabel>
              </Box>
              <Box sx={{display: 'inline-block'}}>
                <Input type="radio" name="inst" id="inst-clg" onClick={() => handleClickForInst(2)}/>
                <InputLabel htmlFor="inst-clg" sx={{
                    display: 'inline-block',
                    pl:1,
                  }}>in College</InputLabel>
              </Box>
            </Box>
            <Box id="school" sx={{ // school details
              display: `${school}`,
            }}>
              <InputLabel htmlFor="sch-name" sx={{
                fontWeight: 400,
                fontSize: '18px',
                color: '#2196f3',
              }}>School name?</InputLabel>
              <Input type="text" id='sch-name' sx={{width: '100%', mb: 3}}/><br />
              <InputLabel htmlFor="lat-deg" sx={{fontWeight: '400',fontSize: '18px',color: '#2196f3', display: 'inline-block', pr:2}}>Select your latest degree: </InputLabel>
              <Select name="degree" id="lat-deg" sx={{display:'block', mb:3}}>
                <MenuItem disabled selected value="">Latest Degree</MenuItem>
                <MenuItem value="hsc">H.S.C</MenuItem>
                <MenuItem value="ssc">S.S.C</MenuItem>
                <MenuItem value="jsc">J.S.C</MenuItem>
              </Select>
              <Box sx={{display:'flex', alignItems:'center', mb:3}}>
                <InputLabel htmlFor="deg-year" sx={{fontWeight: '400',fontSize: '18px',color: '#2196f3', display: 'inline-block', pr:2}}>Select graduation year: </InputLabel>
                <Input type="date" name='deg-year' id='deg-year'/>
              </Box>
            </Box>
            <Box id="college" sx={{ // college details
              display: `${college}`,
              mb:3
            }}>
              <InputLabel htmlFor="clg-name" sx={{
                fontWeight: '400',
                fontSize: '18px',
                color: '#2196f3',
              }}>College name?</InputLabel>
              <Input type="text" id='clg-name' sx={{mb:3, width: '100%'}}/>
              <InputLabel htmlFor="clg-lat-deg" sx={{fontWeight: '400',fontSize: '18px',color: '#2196f3',}}>Select your latest degree: </InputLabel>
              <Select name="degree" id="clg-lat-deg" sx={{display:'block', mb: 3}}>
                <MenuItem disabled selected value="">Latest Degree</MenuItem>
                <MenuItem value="bsc">B.Sc.</MenuItem>
                <MenuItem value="msc">M.Sc.</MenuItem>
              </Select>
              <Box sx={{display: 'flex', alignItems:'center'}}>
                <InputLabel htmlFor="deg-year" sx={{fontWeight: '400',fontSize: '18px',color: '#2196f3', display: 'inline-block', pr:2}}>Select graduation year: </InputLabel>
                <Input type="date" name='deg-year' id='deg-year'/>
              </Box>
            </Box>
            <Box id="company" className={cJob} sx={{
              display: `${cJob}`,
              mb:3
            }}>
            <InputLabel htmlFor="cmp-name" sx={{ // job details
                fontWeight: '400',
                fontSize: '18px',
                color: '#2196f3',
              }}>Company name?</InputLabel>
              <Input type="text" id='cmp-name' sx={{width: '100%', mb:2}} /><br />
              <InputLabel htmlFor="exp-year" sx={{fontWeight: '400',fontSize: '18px',color: '#2196f3'}}>Select your experience: </InputLabel>
              <Select name="degree" id="exp-year" sx={{width: '100%', mb: 2}}>
                <MenuItem disabled selected value="">years of experience</MenuItem>
                <MenuItem value="1-">1-</MenuItem>
                <MenuItem value="1+">1+</MenuItem>
                <MenuItem value="2+">2+</MenuItem>
                <MenuItem value="3+">3+</MenuItem>
              </Select>
              <InputLabel htmlFor="ocup" sx={{fontWeight: '400',fontSize: '18px',color: '#2196f3'}}>Select you occupation: </InputLabel>
              <Select name="occupation" id="ocup" sx={{width: '100%'}}>
                <MenuItem disabled selected value="">Select occupation</MenuItem>
                <MenuItem value="front-end">Front-end developer</MenuItem>
                <MenuItem value="back-end">Back-end developer</MenuItem>
                <MenuItem value="fullstack">Fullstack developer</MenuItem>
              </Select>
            </Box>
            <Button type="submit" sx={{
              p:2,
              width: '100%',
              backgroundColor: '#2196f3',
              color: 'white'
            }}>Submit</Button>
          </form>
        </Box>
      </Box>
    </>
  )
}

export default App
