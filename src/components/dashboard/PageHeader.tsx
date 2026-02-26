interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <div className="p-6 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-colors-primary mb-1">{title}</h1>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}
