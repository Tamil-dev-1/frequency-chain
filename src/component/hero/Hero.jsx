import React from "react";
import "./Hero.css";

/**
 * Place images in public/images/ as below:
 * - public/images/hero-device.png     (the tall blue crypto device)
 * - public/images/card-enc.png
 * - public/images/card-lock.png
 * - public/images/card-speed.png
 * - public/images/logo-small.png      (small round logo in top-left)
 *
 * This component replicates the screenshot layout exactly.
 */
export default function CryptoExact() {
  return (
    <div className="ce-page">
      {/* Outer soft blue frame */}
      <div className="ce-outer-frame">
        {/* Inner viewport */}
        <div className="ce-viewport">

          {/* top translucent navbar */}
          <div className="ce-nav d-flex align-items-center justify-content-between px-3">
            <div className="d-flex align-items-center gap-2">
              <img src="/images/logo-small.png" alt="logo" className="ce-logo" />
              <div className="ce-brand">Glovault</div>
            </div>

            <div className="d-none d-md-flex gap-4 ce-links">
              <span>Features</span>
              <span>Pricing</span>
              <span>Solutions</span>
              <span>Resources</span>
            </div>

            <button className="btn ce-cta">Get Started</button>
          </div>

          {/* main content area (grid) */}
          <div className="container-fluid h-100">
            <div className="row gx-0 align-items-stretch ce-main-row">

              {/* LEFT large hero area */}
              <div className="col-lg-8 ce-left p-5">
                <div className="ce-hero">
                  <h1 className="ce-hero-line ce-hero-crypt">CRYPTO</h1>
                  <h1 className="ce-hero-line ce-hero-sec">SECURITY</h1>

                  <div className="ce-device-wrap" aria-hidden>
                    <img
                      src="/images/hero-device.png"
                      alt="device"
                      className="ce-device"
                    />
                    <div className="ce-device-shadow" />
                  </div>

                  <p className="ce-subtext">
                    Your crypto guardian in the digital frontier. One dashboard to monitor wallets, exchanges, and DeFi accounts.
                  </p>
                </div>
              </div>

              {/* RIGHT stacked cards */}
              <div className="col-lg-4 ce-right p-4">
                <div className="ce-cards">
                  <div className="ce-card ce-card-top">
                    <div className="ce-card-img">
                      <img src="/images/card-enc.png" alt="enc" />
                    </div>
                    <div className="ce-card-body">
                      <div className="ce-card-title">Military-grade Encryption</div>
                      <div className="ce-card-sub">Your assets are protected with the highest protocols.</div>
                    </div>
                  </div>

                  <div className="ce-card ce-card-mid mt-4">
                    <div className="ce-card-img">
                      <img src="/images/card-lock.png" alt="lock" />
                    </div>
                    <div className="ce-card-body">
                      <div className="ce-card-title">Access & Protect</div>
                      <div className="ce-card-sub">Secure access across wallet types and devices.</div>
                    </div>
                  </div>

                  <div className="ce-card ce-card-bot mt-4">
                    <div className="ce-card-img">
                      <img src="/images/card-speed.png" alt="speed" />
                    </div>
                    <div className="ce-card-body">
                      <div className="ce-card-title">Lightning-fast Transactions</div>
                      <div className="ce-card-sub">Fast, reliable transfers with minimal latency.</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
