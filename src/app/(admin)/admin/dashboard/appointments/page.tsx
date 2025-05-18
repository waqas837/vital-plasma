import { getAppointmentRequests } from "./actions";
import AppointmentRequestsPage from "./RenderAppointments";

export default async function AppointmentsPage() {
    const { appointments } = await getAppointmentRequests();
    return <AppointmentRequestsPage initialAppointments={appointments as any} user={"admin"} />;
}
