import { Code2, Globe, ScanFace, Satellite } from 'lucide-react';

export const projects = [
    {
        id: 1,
        title: 'Monkeypox Skin Lesion Detection',
        description: 'CNN-based classification model using ResNet18 to detect skin lesions. Leverages Deep Learning for accurate medical image analysis.',
        tech: ['Python', 'PyTorch', 'ResNet18', 'Deep Learning'],
        github: 'https://github.com/RAVI-RM07/Monkeypox-Skin-Lesion-Detection-Using-ResNet18.git',
        demo: '#',
        icon: ScanFace
    },
    {
        id: 2,
        title: 'LEO PNT TLE',
        description: 'Full-stack system filtering and displaying visible LEO satellites for a specific location using TLE data and SGP4 propagation.',
        tech: ['Python', 'Flask', 'JavaScript', 'SGP4'],
        github: 'https://github.com/RAVI-RM07/LEO-PNT-TLE',
        demo: '#',
        icon: Satellite
    },
    {
        id: 3,
        title: 'Leo Satellite Dashboard - SIH Project',
        description: 'Frontend for the Smart India Hackathon project (zyranav.space). A responsive platform showcasing the LEO satellite tracking system.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/RAVI-RM07',
        demo: 'https://zyranav.space',
        icon: Globe
    }
];
