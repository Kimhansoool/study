export default function Form({ status }: { status: string }) {
  if (status === 'success') {
    return <h1>That's right!</h1>;
  }
  return (
    <form className="mb-5">
      <textarea disabled={status === 'submitting'} />
      <br />
      <button className="bg-black text-white px-2 py-1 rounded-[4px]" disabled={status === 'empty' || status === 'submitting'}>
        Submit
      </button>
      {status === 'error' && <p className="Error">Good guess but a wrong answer. Try again!</p>}
    </form>
  );
}
