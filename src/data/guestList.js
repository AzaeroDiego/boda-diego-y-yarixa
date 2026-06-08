// Invitaciones personalizadas por codigo.
// Comparte enlaces como:
// ?inv=DY-001
// ?inv=DY-002
// ?inv=DY-003
// ?inv=DY-004
export const guestList = {
  'DY-001': {
    code: 'DY-001',
    label: 'Invitado especial',
    passes: 1,
  },
  'DY-002': {
    code: 'DY-002',
    label: 'Invitado especial',
    passes: 2,
  },
  'DY-003': {
    code: 'DY-003',
    label: 'Invitado especial',
    passes: 3,
  },
  'DY-004': {
    code: 'DY-004',
    label: 'Invitado especial',
    passes: 4,
  },
};

export function getGuestInvitation(search) {
  const params = new URLSearchParams(search);
  const invitationCode = (params.get('inv') || '').trim().toUpperCase();

  if (!invitationCode) return null;

  return guestList[invitationCode] || null;
}
