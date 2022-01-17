import headerStyles from "../styles/Header.module.css";

function Header() {
  //   const x = 1;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>web dev</span> news
      </h1>
      <p className={headerStyles.description}>
        So I push it in opened aone button another one and then bam!! ... Get
        the latest news
      </p>
      {/* <style jsx>{`
        .title {
          color: ${x > 3 ? "red" : "blue"};
        }
      `}</style> */}
    </div>
  );
}

export default Header;
