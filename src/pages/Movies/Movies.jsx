import css from './Movies.module.css';

export const Movies = () => {
  return (
    <div>
      <form>
        <input className={css.input} />
        <button className={css.btnSubmit} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
