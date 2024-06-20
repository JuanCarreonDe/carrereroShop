interface Props{
    id: string;
    type: string;
    label?: string;
    placeholder?: string;
    defaultValue?: string | number;
}


export const Input = ({id, type, label, placeholder, defaultValue} : Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="quantity">{label}</label>
      <input
        id={id}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="bg-neutral-900 rounded-md border-[1px] border-neutral-200 px-3 py-1"
      ></input>
    </div>
  );
};
