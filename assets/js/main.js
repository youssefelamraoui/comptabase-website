/**
 * ComptaBase — Main Application Script
 * Lightweight vanilla JavaScript for navigation, mockup interactivity, and clipboard actions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNavPanel = document.getElementById('mobile-nav-panel');

  if (mobileToggle && mobileNavPanel) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNavPanel.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      mobileToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });

    // Close mobile nav when clicking any link inside it
    const mobileLinks = mobileNavPanel.querySelectorAll('.nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNavPanel.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNavPanel.classList.contains('is-open')) {
        mobileNavPanel.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.focus();
      }
    });
  }

  // 2. Email Copy Button
  const copyBtn = document.getElementById('copy-email-btn');
  const emailText = 'founder@comptabase.com';

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailText);
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#34D399;" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Copied!</span>
        `;
        setTimeout(() => {
          copyBtn.innerHTML = originalHtml;
        }, 2500);
      } catch (err) {
        // Fallback if clipboard API is blocked
        const input = document.createElement('input');
        input.value = emailText;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
        }, 2500);
      }
    });
  }

  // 3. Mockup Interactive Journal Tab Selector
  const tabHA = document.getElementById('tab-journal-ha');
  const tabBQ = document.getElementById('tab-journal-bq');
  const journalRowsHA = document.getElementById('journal-rows-ha');
  const journalRowsBQ = document.getElementById('journal-rows-bq');
  const journalTitle = document.getElementById('journal-view-title');
  const journalStatus = document.getElementById('journal-view-status');

  if (tabHA && tabBQ && journalRowsHA && journalRowsBQ) {
    tabHA.addEventListener('click', () => {
      tabHA.classList.add('active');
      tabBQ.classList.remove('active');
      journalRowsHA.style.display = '';
      journalRowsBQ.style.display = 'none';
      if (journalTitle) journalTitle.textContent = 'HA — Purchases Journal (October 2026)';
      if (journalStatus) journalStatus.innerHTML = '<span class="mockup-dot green"></span> Balanced: 14,400.00 MAD';
    });

    tabBQ.addEventListener('click', () => {
      tabBQ.classList.add('active');
      tabHA.classList.remove('active');
      journalRowsHA.style.display = 'none';
      journalRowsBQ.style.display = '';
      if (journalTitle) journalTitle.textContent = 'BQ — Bank Journal (Demo Account)';
      if (journalStatus) journalStatus.innerHTML = '<span class="mockup-dot green"></span> Balanced: 14,400.00 MAD';
    });
  }
});
