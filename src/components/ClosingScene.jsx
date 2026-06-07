import LayeredScene from './LayeredScene.jsx';

export default function ClosingScene({ config }) {
  return (
    <LayeredScene variant="river">
      <div className="mx-auto max-w-[360px] text-center">
        <p className="section-eyebrow">Hasta pronto</p>
        <h2 className="font-display text-5xl leading-tight text-ivory">
          {config.closingText}
        </h2>
        <p className="mt-8 font-serif text-3xl italic text-champagne">
          Con cariño, {config.groomName} & {config.brideName}
        </p>
      </div>
    </LayeredScene>
  );
}
