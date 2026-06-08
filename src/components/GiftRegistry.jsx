import { Copy, Gift } from 'lucide-react';
import { useState } from 'react';
import FadeIn from './FadeIn.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function GiftRegistry({ config }) {
  const [copied, setCopied] = useState(false);
  const [copiedWallet, setCopiedWallet] = useState('');

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(config.gifts.accountNumber);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  async function handleCopyWallet(number) {
    try {
      await navigator.clipboard.writeText(number);
      setCopiedWallet(number);
      window.setTimeout(() => setCopiedWallet(''), 1800);
    } catch {
      setCopiedWallet('');
    }
  }

  return (
    <section className="section section-dark">
      <div className="section-inner">
        <SectionTitle eyebrow="Regalos" title="Su presencia es nuestro mejor regalo">
          {'Si deseas obsequiarnos un detalle adicional, puedes hacerlo aqu\u00ed.'}
        </SectionTitle>
        <FadeIn>
          <article className="gift-card">
            <div className="gift-icon">
              <Gift size={18} />
            </div>
            <p className="gift-label">{config.gifts.label}</p>
            <p className="gift-number">{config.gifts.accountNumber}</p>
            <button className="inline-link-button" type="button" onClick={handleCopy}>
              <Copy size={15} />
              {copied ? 'Copiado' : 'Copiar cuenta'}
            </button>
            <div className="wallet-grid">
              {config.gifts.walletContacts.map((wallet) => (
                <button
                  key={wallet.number}
                  className="wallet-card"
                  type="button"
                  onClick={() => handleCopyWallet(wallet.number)}
                >
                  <span>{wallet.label}</span>
                  <strong>{wallet.number}</strong>
                  <small>{copiedWallet === wallet.number ? 'Copiado' : 'Copiar numero'}</small>
                </button>
              ))}
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
