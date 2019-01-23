export class Properties {
    text: string;
    userID: string;
    userName: string;
    day: number;
    month: number;
    year: number;
    hour: number;
    minute: number;
    second: number;
    source: string;
    sentiment: string;
    sentiStrings: string;
    labelledSentiment: string;
    crowder: string;
}

export class Coordinate {
    id: string;
    type: string;
    coordinates: number[];
    sentiment: string;
    source: string;
}

export class Sentiment {
    _id: string;
    properties: Properties;
    coordinate: Coordinate;
}