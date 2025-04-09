import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CalendlyEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const fetchEvents = async () => {
    try {
      // 1. Get User URI
      const userResponse = await axios.get('https://api.calendly.com/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userUri = userResponse.data.resource.uri;
      const eventsResponse = await axios.get(
        `https://api.calendly.com/scheduled_events?user=${userUri}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-10">All Appointments</h1>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.uri} className="mb-4 border-b pb-4">
              <p><strong>Event:</strong> {event.name}</p>
              <p><strong>Start Time:</strong> {event.start_time}</p>
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

export default CalendlyEvents;
