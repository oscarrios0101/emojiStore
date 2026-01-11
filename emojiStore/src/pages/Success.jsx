//the animations made with qwen 3 coder

const Success = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black font-mono text-red-500">
      {/* Scanning lines effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="scanning-line animate-scanning absolute inset-0 h-1 w-full bg-green-500 opacity-20"></div>
      </div>

      {/* Glitch effect overlay */}
      <div className="animate-glitch-overlay pointer-events-none absolute inset-0 bg-red-500 opacity-0"></div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl border-2 border-red-500 bg-gray-900 p-6 shadow-2xl shadow-red-500/20">
          {/* Header with government seal effect */}
          <div className="mb-8 border-b-2 border-red-500 pb-4 text-center">
            <div className="mb-2 inline-block animate-pulse text-xl font-bold tracking-wider text-red-500">
              [GOVERNMENT SECURITY OVERRIDE]
            </div>
            <div className="mx-auto h-1 w-32 animate-pulse bg-red-500"></div>
          </div>

          {/* Main content with hacker aesthetic */}
          <section className="space-y-4 text-sm leading-relaxed md:text-base">
            <div className="animate-pulse-slow border-l-4 border-red-500 bg-gray-800 p-4">
              <span className="font-bold text-red-400">[SYSTEM OVERRIDE]</span>{" "}
              – ORDER TERMINATED CLASSIFICATION UPDATED: THREAT LEVEL 1 –
              EXISTENTIAL (OMEGA-ZERO) Your transaction has been flagged as a
              Crime Against Reality. By attempting to procure these restricted
              artifacts, you have forfeited your status as a civilian and a
              citizen. Your identity, biometrics, DNA sequencing data,
              geolocation, and browser fingerprints have been distributed via
              encrypted hyper-link to: NSA • CIA • FBI • MSS • DGSE • MOSSAD •
              GRU • MI6 • ASIO • SHIN BET • UNIDAD DE INTELIGENCIA MILITAR • AND
              THE P5 JOINT BLACK-SITE TASK FORCE.
            </div>

            <div className="border-l-4 border-yellow-500 bg-gray-800 p-4">
              <span className="font-bold text-yellow-400">
                MANDATORY DIRECTIVES:
              </span>
              <ul className="mt-2 space-y-2 pl-4">
                <li>
                  <span className="text-red-400">• REMAIN STATIONARY:</span>{" "}
                  Your current coordinates are locked. Kinetic orbital strikes
                  and extraction teams are currently converging on your signal.
                </li>
                <li>
                  <span className="text-red-400">• VOIDED RIGHTS:</span> Your
                  right to legal counsel, trial, and a known place of burial has
                  been retroactively revoked under the Temporal Sovereignty Act.
                </li>
                <li>
                  <span className="text-red-400">• DO NOT DISCONNECT:</span> Do
                  not power off your devices. We are currently archiving your
                  consciousness for post-mortem digital interrogation.
                </li>
                <li>
                  <span className="text-red-400">• TOTAL SILENCE:</span> Do not
                  speak. Your vocal vibrations are being monitored for signs of
                  resistance. Any attempt to communicate with family or legal
                  entities will result in their immediate inclusion in your
                  "Rendition Profile."
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 bg-gray-800 p-4">
              <span className="font-bold text-red-400">
                DISPOSITION STATUS:
              </span>{" "}
              You will be collected for debriefing, indefinite detention in a
              non-Euclidean black site, or summary execution at the sole
              discretion of the first responding agency. ESTIMATED TIME UNTIL
              CONTACT: IMMINENT. Note: Your local reality may begin to flicker.
              This is normal during high-priority asset seizure. HAVE A PLEASANT
              FINAL FEW MINUTES.
            </div>
          </section>

          {/* Footer with countdown timer */}
          <div className="mt-8 border-t-2 border-red-500 pt-4 text-center">
            <div className="animate-pulse text-xs text-red-400">
              [COUNTDOWN TO EXTRACTION: 00:00:10]
            </div>
            <div className="mt-2 h-1 w-full bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Additional glitch effects */}
      <style jsx>{`
        @keyframes scanning {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        @keyframes glitch-overlay {
          0%,
          100% {
            opacity: 0;
          }
          1% {
            opacity: 0.2;
          }
          2% {
            opacity: 0.1;
          }
          3% {
            opacity: 0.3;
          }
          4% {
            opacity: 0.1;
          }
          5% {
            opacity: 0.2;
          }
          6% {
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-scanning {
          animation: scanning 8s linear infinite;
        }

        .animate-glitch-overlay {
          animation: glitch-overlay 5s infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Success;
