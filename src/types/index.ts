export interface Project {
    title: string;
    description: string;
    techStack: string[];
    gitHubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
}

export interface Skill {
    name: string;
    category: string[];
}