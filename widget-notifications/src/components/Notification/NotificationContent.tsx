interface NotificationContentProps {
  text: string;
}

export function NotificationContent({ text }: NotificationContentProps) {
  return (
    <div className="flex-1 flex-col gap-8">
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">
        {text}
      </p>
      <div className="text-xxs text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
        <span>Convite</span>
        <span>Há 3 minutos</span>
      </div>
    </div>
  );
}
