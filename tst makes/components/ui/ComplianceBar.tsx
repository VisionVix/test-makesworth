'use client';

import React from 'react';

const ComplianceBar = () => {
  return (
    <div className="bg-[#0a0a0a] border-t border-[#222] py-[10px] px-[20px] flex items-center justify-center gap-0 flex-wrap font-sans text-[11px] text-[#888]">
      <span className="flex items-center gap-[5px] px-[12px] border-r border-[#333]">
        Compliance
      </span>
      <span className="flex items-center gap-[5px] px-[12px] border-r border-[#333]">
        ⭐ EU AI Act · Article 50 Compliant
      </span>
      <span className="flex items-center gap-[5px] px-[12px] border-r border-[#333]">
        🔒 GDPR Privacy
      </span>
      <span className="flex items-center gap-[5px] px-[12px] border-r border-[#333]">
        🔒 SSL Secured
      </span>
      <span className="flex items-center gap-[5px] px-[12px] border-r border-[#333]">
        🛡️ CSP Protected
      </span>
      <span className="flex items-center gap-[5px] px-[12px]">
        Built with{" "}
        <a
          href="https://websitegenerator.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#888] no-underline border-b border-[#444] pb-[1px] transition-colors duration-200 hover:text-white"
        >
          websitegenerator.dev
        </a>
      </span>
    </div>
  );
};

export default ComplianceBar;