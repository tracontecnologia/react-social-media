type Props = {
  type?: 'text' | 'email' | 'password';
  name: string;
  id: string;
  placeholder: string;
  label?: string;
};

export function Input({ type = 'text', name, label, id, placeholder }: Props) {
  return (
    <>
      {label && (
        <label htmlFor={name} className="text-sm text-black pb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="w-full bg-white p-2 border border-gray-200 rounded-[4px] outline-none hover:border-brandPrimary/200 active:border-brandPrimary/300 focus:ring-2 focus:ring-brandPrimary/100 placeholder:text-gray-500"
      />
    </>
  );
}
