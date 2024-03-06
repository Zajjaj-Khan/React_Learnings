import React from "react";
import "./HorizontalTimeline.css"; // Create a CSS file for styling
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineDot from "@mui/lab/TimelineDot";
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'

  
const TimelineComponent = ({ title, date, content }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <h3 className="timeline-item-title">{title}</h3>
      <p className="timeline-item-date">{date}</p>
      <p className="timeline-item-content">{content}</p>
    </div>
  </div>
);

const HorizontalTimeline = ({ events }) => (
  
<Timeline placeholder>
  <TimelineEvent
    title='This is first title'
    subtitle='26/03/2019 09:51'
  />
  <TimelineEvent
    color='#87a2c7'
    title='Todos'
    subtitle='26/03/2019 09:51'
  />
  <TimelineEvent
    color='#9c2919'

    title='Role'
    subtitle='26/03/2019 09:51'
    // action={{
    //   label: 'Achivement',
    //   onClick: () => window.alert('Erro!')
    // }}
  />
</Timeline>
);

export default HorizontalTimeline;
