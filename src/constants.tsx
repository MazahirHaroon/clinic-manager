interface HelpEmailProps {
    id: string;
    subject: string;
    body: string;
};

export const HELP_EMAIL: HelpEmailProps = {
    id: "help@example.com",
    subject: "Add Department of <Department here>",
    body: "Dear Admin, \n Please add the department of <Department Name here> to the list. \n Thank you."
};

export const DEPARTMENT_LIST: { key: number; value: string; label: string }[] = [
    {
        key: 0,
        value: 'placeholder',
        label: 'Please Select a Department',
    },
    {
        key: 1,
        value: 'general-medicine',
        label: 'General Medicine',
    },
    {
        key: 2,
        value: 'oncology',
        label: 'Oncology',
    },
    {
        key: 3,
        value: 'cardiology',
        label: 'Cardiology',
    },
    {
        key: 4,
        value: 'dermatology',
        label: 'Dermatology',
    },
    {
        key: 5,
        value: 'neurology',
        label: 'Neurology',
    },
    {
        key: 6,
        value: 'orthopedics',
        label: 'Orthopedics',
    },
    {
        key: 7,
        value: 'pediatrics',
        label: 'Pediatrics',
    },
    {
        key: 8,
        value: 'gynecology',
        label: 'Gynecology & Obstetrics',
    },
    {
        key: 9,
        value: 'ophthalmology',
        label: 'Ophthalmology (Eye Specialist)',
    },
    {
        key: 10,
        value: 'psychiatry',
        label: 'Psychiatry',
    },
    {
        key: 11,
        value: 'radiology',
        label: 'Radiology',
    },
    {
        key: 12,
        value: 'urology',
        label: 'Urology',
    },
    {
        key: 13,
        value: 'gastroenterology',
        label: 'Gastroenterology',
    },
    {
        key: 14,
        value: 'endocrinology',
        label: 'Endocrinology (Diabetes & Hormones)',
    },
    {
        key: 15,
        value: 'pulmonology',
        label: 'Pulmonology (Lung & Respiratory)',
    }
];

export default DEPARTMENT_LIST;
