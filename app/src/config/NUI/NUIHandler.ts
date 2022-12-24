export type RegisterEmitProps = {
  callback: (data: any) => void;
  type: string;
};

const events: Record<RegisterEmitProps['type'], RegisterEmitProps['callback']> = {};

export const NUI = {
  registerEmit: (type: string, callback: (data: any) => void) => {
    events[type] = callback;
  },
};

export const EventListener = () => {
  window.addEventListener('message', (e) => {
    if (!events[e.data.type]) return;
    events[e.data.type](e.data);
  });

  return null;
};
