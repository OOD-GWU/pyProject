import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowAppointment = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');

  const token = import.meta.env.VITE_CALENDLY_ACCESS_TOKEN;

  const fetchInviteeDetails = async (eventId) => {
    try {
      const response = await axios.get(
        `https://api.calendly.com/scheduled_events/${eventId}/invitees`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const invitees = response.data.collection;
      if (invitees.length > 0) {
        return {
          email: invitees[0].email,
          name: invitees[0].name,
        };
      } else {
        return {
          email: 'No invitee',
          name: 'N/A',
        };
      }
    } catch (error) {
      console.error(`Error fetching invitee for event ${eventId}:`, error);
      return {
        email: 'Error fetching email',
        name: 'Error fetching name',
      };
    }
  };

  const fetchEvents = async (userEmail) => {
    try {
      const userResponse = await axios.get('https://api.calendly.com/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const userUri = userResponse.data.resource.uri;

      const eventsResponse = await axios.get(
        `https://api.calendly.com/scheduled_events?user=${userUri}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const rawEvents = eventsResponse.data.collection;

      const eventsWithInvitees = await Promise.all(
        rawEvents.map(async (event) => {
          const eventId = event.uri.split('/').pop();
          const invitee = await fetchInviteeDetails(eventId);
          return {
            ...event,
            inviteeName: invitee.name,
            inviteeEmail: invitee.email,
          };
        })
      );

      setEvents(eventsWithInvitees);
    } catch (error) {
      console.error('Error fetching Calendly events:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLoggedInUser = async () => {
    try {
      const response = await fetch("http://localhost:5001/auth/me", {
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        setUserEmail(data.user.email);
        fetchEvents(data.user.email);
      } else {
        console.error(data.error || "Failed to get user email");
      }
    } catch (err) {
      console.error("Error fetching user info:", err);
    }
  };

  useEffect(() => {
    fetchLoggedInUser();
  }, []);

  const filteredEvents = events.filter(event =>
    event.inviteeEmail.toLowerCase().includes(userEmail.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-6">My Appointments</h1>
      {userEmail && <p className="mb-4 text-gray-600">Logged in as: <strong>{userEmail}</strong></p>}

      {filteredEvents.length === 0 ? (
        <p>No events found for this email.</p>
      ) : (
        <ul>
          {filteredEvents.map((event) => (
            <li key={event.uri} className="mb-4 border-b pb-4">
              <p><strong>Event:</strong> {event.name}</p>
              <p><strong>Appointment Time:</strong> {event.start_time}</p>
              <p><strong>End Time:</strong> {event.end_time}</p>
              <p><strong>Invitee Name:</strong> {event.inviteeName}</p>
              <p><strong>Invitee Email:</strong> {event.inviteeEmail}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShowAppointment;
