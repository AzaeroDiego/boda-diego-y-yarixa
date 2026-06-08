// Invitaciones personalizadas por código.
// Comparte enlaces como:
// ?inv=DY-001
// ?inv=DY-002

export const guestList = {
  'DY-001': {
    code: 'DY-001',
    name: 'Carlos Ramírez',
    label: 'Angel de la Reguera',
    passes: 1,
  },

  'DY-002': {
    code: 'DY-002',
    name: 'Familia Pérez Guevara',
    label: 'Diego Briones y Esposa',
    passes: 2,
  },

  'DY-003': {
    code: 'DY-003',
    name: 'Luis y Andrea',
    label: 'Invitación doble',
    passes: 3,
  },

  'DY-004': {
    code: 'DY-004',
    name: 'Familia Casas',
    label: 'Familia del novio',
    passes: 4,
  },
};

export function getGuestInvitation(search) {
  const params = new URLSearchParams(search);
  const invitationCode = (params.get('inv') || '').trim().toUpperCase();

  if (!invitationCode) return null;

  return guestList[invitationCode] || null;
}
