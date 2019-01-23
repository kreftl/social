export class Sources {
    instagram: any = {};
    twitter: any = {};
}

export class Sentiments {
    positive: any = {};
    negative: any = {};
    neutral: any = {};
}

export class Analytics {
    sentiments: Sentiments = new Sentiments;
    sources: Sources = new Sources;
    colourBy: string = "sentiment";
}