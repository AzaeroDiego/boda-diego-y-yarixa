export default function QRPlaceholder() {
  return (
    <div className="qr-placeholder" aria-label="Codigo QR pendiente">
      {Array.from({ length: 49 }).map((_, index) => (
        <span key={index} className={(index * 7 + index) % 5 === 0 ? 'on' : ''} />
      ))}
    </div>
  );
}
