export default function AdminPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 py-10 px-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Admin Dashboard
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
                Welcome to the admin panel. Here you can manage your application settings and monitor user activities.
            </p>
        </div>
    );
}