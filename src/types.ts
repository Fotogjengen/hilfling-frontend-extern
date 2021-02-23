export interface DefaultProps {
  /** Used to add style to components */
  className?: any;
}

export interface BaseCarouselItem {
  title: string;
  image: string;
}

export type UKA = "uka";
export type SAMFUNDET = "samfundet";
export type ISFIT = "isfit";
export type ANNET = "annet";

export type EventType = UKA | SAMFUNDET | ISFIT | ANNET;

type EventCard = "EventCard";
type GjengfotoCard = "GjengfotoCard";

export type CardType = EventCard | GjengfotoCard;
