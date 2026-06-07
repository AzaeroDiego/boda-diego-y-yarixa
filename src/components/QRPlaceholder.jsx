export default function QRPlaceholder() {
  return (
    <div className="qr-placeholder" aria-label="Código QR pendiente">
      {Array.from({ length: 49 }).map((_, index) => (
        <span key={index} className={(index * 7 + index) % 5 === 0 ? 'on' : ''} />
      ))}
      {/* Connect a real QR generator here when the backend/API is ready. */}
    </div>
  );
}
