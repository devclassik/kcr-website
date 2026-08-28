'use me';
'use client';

import React, { useState } from 'react';
import { WebAppPlugin, PluginOption } from '../types/plugin';
import { X, Check, Sliders, ShieldCheck, Cpu, Key, Play } from 'lucide-react';

interface PluginConfigModalProps {
  plugin: WebAppPlugin | null;
  onClose: () => void;
  onSave: (updatedPlugin: WebAppPlugin) => void;
}

export const PluginConfigModal: React.FC<PluginConfigModalProps> = ({
  plugin,
  onClose,
  onSave
}) => {
  if (!plugin) return null;

  const [options, setOptions] = useState<PluginOption[]>(plugin.configOptions || []);
  const [isActive, setIsActive] = useState<boolean>(plugin.active);
  const [isInstalled, setIsInstalled] = useState<boolean>(plugin.installed);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleOptionChange = (id: string, newValue: string | boolean) => {
    setOptions(prev =>
      prev.map(opt => (opt.id === id ? { ...opt, value: newValue } : opt))
    );
  };

  const handleSave = () => {
    const updated: WebAppPlugin = {
      ...plugin,
      active: isActive,
      installed: isInstalled,
      configOptions: options
    };
    onSave(updated);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-2xl bg-[#0E0620] border border-[#A855F7]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(168,85,247,0.3)] relative overflow-hidden">
        
        {/* Glowing top line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#00F0FF]" />

        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-[#A855F7]/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1D0C42] border border-[#A855F7]/40 flex items-center justify-center text-[#C084FC] font-extrabold text-lg">
              <Sliders className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{plugin.name}</h3>
                <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-[#7C3AED]/30 text-[#C084FC] border border-[#A855F7]/30">
                  {plugin.version}
                </span>
              </div>
              <p className="text-xs text-[#9CA3AF] mt-1">{plugin.author} • {plugin.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#1A0B36] text-[#9CA3AF] hover:text-white hover:bg-[#2A1058] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6 max-h-[60vh] overflow-y-auto pr-2">
          
          {/* Status Switches */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#13082C] border border-[#A855F7]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white">Installation State</p>
                <p className="text-[10px] text-[#9CA3AF]">Enable in Next.js workspace</p>
              </div>
              <button
                type="button"
                onClick={() => setIsInstalled(!isInstalled)}
                className={`w-12 h-6 rounded-full transition-colors relative ${
                  isInstalled ? 'bg-[#7C3AED]' : 'bg-[#1F123C]'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                    isInstalled ? 'left-7' : 'left-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between border-l border-[#A855F7]/20 pl-4">
              <div>
                <p className="text-xs font-bold text-white">Active Status</p>
                <p className="text-[10px] text-[#9CA3AF]">Process live events</p>
              </div>
              <button
                type="button"
                onClick={() => setIsActive(!isActive)}
                disabled={!isInstalled}
                className={`w-12 h-6 rounded-full transition-colors relative ${
                  isActive && isInstalled ? 'bg-[#10B981]' : 'bg-[#1F123C]'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                    isActive && isInstalled ? 'left-7' : 'left-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Config Options */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C084FC]">
              Plugin Settings & Environment Keys
            </h4>

            {options.length === 0 ? (
              <p className="text-xs text-[#9CA3AF]">No configurable parameters for this plugin.</p>
            ) : (
              options.map(option => (
                <div key={option.id} className="p-4 rounded-xl bg-[#13082C]/60 border border-[#A855F7]/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-white flex items-center gap-2">
                      <Key className="w-3.5 h-3.5 text-[#C084FC]" />
                      <span>{option.name}</span>
                    </label>
                    <span className="text-[10px] font-mono text-[#9CA3AF] uppercase">{option.type}</span>
                  </div>
                  <p className="text-[11px] text-[#9CA3AF]">{option.description}</p>

                  {option.type === 'string' && (
                    <input
                      type="text"
                      value={option.value as string}
                      onChange={(e) => handleOptionChange(option.id, e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#0B0418] border border-[#A855F7]/30 text-xs font-mono text-white focus:outline-none focus:border-[#C084FC]"
                    />
                  )}

                  {option.type === 'boolean' && (
                    <div className="flex items-center gap-3 pt-1">
                      <button
                        type="button"
                        onClick={() => handleOptionChange(option.id, !option.value)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                          option.value
                            ? 'bg-[#7C3AED] text-white'
                            : 'bg-[#1A0B36] text-[#9CA3AF]'
                        }`}
                      >
                        {option.value ? 'Enabled' : 'Disabled'}
                      </button>
                    </div>
                  )}

                  {option.type === 'select' && option.options && (
                    <select
                      value={option.value as string}
                      onChange={(e) => handleOptionChange(option.id, e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#0B0418] border border-[#A855F7]/30 text-xs font-mono text-white focus:outline-none focus:border-[#C084FC]"
                    >
                      {option.options.map(opt => (
                        <option key={opt} value={opt} className="bg-[#0E0620]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Features Checklist */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C084FC]">
              Capabilities
            </h4>
            <div className="space-y-1.5">
              {plugin.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#D1D5DB]">
                  <Check className="w-4 h-4 text-[#10B981]" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#A855F7]/20">
          {savedSuccess ? (
            <span className="text-xs font-bold text-[#10B981] flex items-center gap-1.5">
              <Check className="w-4 h-4" /> Plugin configuration saved!
            </span>
          ) : (
            <span className="text-xs text-[#9CA3AF] font-mono">Changes take effect immediately</span>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#1A0B36] text-[#9CA3AF] hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-xl text-xs font-bold btn-purple-glow"
            >
              Save Configurations
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
