function PageDropDown({ pages }) {
  return (
    <div className="drop-down__container">
      <label htmlFor="all" className="drop-down__item">
        All pages<input type="checkbox" id="all" name="checkbox" />      
			</label>

			{/* 
				I would place HR tag in seperate component so that it can be reusable but for the sake of simplicity I will leave it as it is 
			*/}
			<div className="drop-down__hr">
				<div/>
			</div>
		
			{/* 
				I will use map here to dynamically print pages for easier maintainance 
			*/}
			{pages.map((page, i) => {
				const index = i + 1;
				return (
					<label htmlFor={ index } key={ i } className="drop-down__item">
						{ page }<input type="checkbox" id={ index } name="checkbox" />      
      		</label>
				)
			})}
		
			<div className="drop-down__hr">
				<div/>
			</div>
			
			<div className="drop-down__btn">
				<a href="#">
					<button>
						Done
					</button>
				</a>
			</div>
    </div>
  );
}

export default PageDropDown;
