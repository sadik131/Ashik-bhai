"use client"

const Announcement = () => {

    const announcements = [
        {
            title: "New Update Available!",
            description: "Check out the new features and improvements in this update.",
        },
        {
            title: "Maintenance Scheduled",
            description: "Our site will be down for scheduled maintenance on Sunday at 2 AM.",
        },
        {
            title: "Feature Launch",
            description: "We're excited to announce the launch of our new analytics dashboard!",
        },
        {
            title: "Community Event",
            description: "Join us for a community Q&A session this Thursday at 5 PM.",
        },
        {
            title: "Security Notice",
            description: "Please update your password to ensure the security of your account.",
        },
        {
            title: "Holiday Sale!",
            description: "Enjoy 20% off on all subscriptions this holiday season!",
        },
    ];

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">Announcements</h1>
            <div className="space-y-6">
                {announcements.map((announcement, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold mb-2">{announcement.title}</h2>
                        <p className="text-gray-700">{announcement.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Announcement;
