import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SchoolIcon from '@material-ui/icons/School';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import CodeIcon from '@material-ui/icons/Code';
import './Experience.css';



const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '12px 6px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Experience() {
  const classes = useStyles();

  return (
<div className='timeline-header'>
    <Timeline align="alternate">
      <TimelineItem >
        <TimelineOppositeContent>
          <Typography variant="h4" color='textPrimary'>
            Start - 2015
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary'>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail}/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1"> FACULDADE </Typography>
             <Typography>FATEC - NOME DO CURSO</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="h5" color='textPrimary'>
            From 08/2017 - Until 12/2017
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <WorkOutlineOutlinedIcon />
          </TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1"> JOB </Typography>
             <Typography>Intern in CI-CWR</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="h4" color='textPrimary'>
            From 01/2018 - Until 07/2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1"> JOB </Typography>
             <Typography>Intern in CI-DAV</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="h4" color='textPrimary'>
            Gratuated - 2017
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary'>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1"> FACULDADE </Typography>
             <Typography>FATEC - NOME DO CURSO</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="h4" color='textPrimary'>
            From 08/2019 - Until 12/2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1"> JOB </Typography>
             <Typography>Reserach,Development and Innovation Scholarship in GS/TET-LA (DIA - Digital Innovation and Automation)</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="h4" color='primary'>
            Since 01/2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <CodeIcon/>
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1"> JOB</Typography>
            <Typography>Junior Developer in GS/TET-LA (DIA - Digital Innovation and Automation)</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}