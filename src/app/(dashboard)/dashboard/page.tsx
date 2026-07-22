import ProtectedRoute from "@/components/features/auth/ProtectedRoute"

const page = () => {
  return (
    <ProtectedRoute>
      <div className="p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p className="mt-2 text-muted">
        Welcome to Inventra.
      </p>
    </div>
    </ProtectedRoute>
  );
}

export default page
