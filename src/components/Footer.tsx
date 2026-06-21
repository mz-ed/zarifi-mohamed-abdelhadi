import { portfolioData } from "../lib/data"

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      <a href="#hero" className="back-top" aria-label="Back to top">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </a>
    </footer>
  )
}
