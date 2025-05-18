import { getAppointmentRequests } from "@/app/(admin)/admin/dashboard/appointments/actions";
import AppointmentRequestsPage from "@/app/(admin)/admin/dashboard/appointments/RenderAppointments";

 
export default async function AppointmentsPage() {
    const { appointments } = await getAppointmentRequests();
    return <AppointmentRequestsPage initialAppointments={appointments as any} user={"simpleUser"} />;
}
