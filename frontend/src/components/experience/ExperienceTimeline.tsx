/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

const items = [
  {
    id: 1,
    date: "Mar 15, 2024",
    title: "Project Kickoff",
    description:
      "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
  },
  {
    id: 2,
    date: "Mar 22, 2024",
    title: "Design Phase",
    description:
      "Completed wireframes and user interface mockups. Stakeholder review and feedback incorporated.",
  },
  {
    id: 3,
    date: "Apr 5, 2024",
    title: "Development Sprint",
    description:
      "Backend API implementation and frontend component development in progress.",
  },
  {
    id: 4,
    date: "Apr 19, 2024",
    title: "Testing & Deployment",
    description:
      "Quality assurance testing, performance optimization, and production deployment preparation.",
  },
];

export default function ExperienceCard({ data }: { data: any }) {
  return (
    <Timeline defaultValue={3}>
      {data.map((item: any) => (
        <TimelineItem key={item.id} step={item.id}>
          <TimelineHeader>
            <TimelineSeparator />

            <TimelineTitle>{item.company}</TimelineTitle>
            <TimelineDate>{item.startDate}</TimelineDate>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>{item.position}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
