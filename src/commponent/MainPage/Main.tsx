import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';




export const styleMain = {
	mt: 30,
	fontSize: 50,
	fontWeight: 'fontWeightBold',
	zIndex: 'appBar',
	border: 1,

} as const;




const Main = () => {




	return (

		<Box component='main' sx={{ zIndex: 'appBar', }}>
			<Container maxWidth={'maxWidth'} sx={{ ...styleMain, }}>
				MAINPAGE

				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur nemo voluptatum fugit nobis laudantium voluptates distinctio possimus, deserunt aperiam inventore, sint accusantium blanditiis impedit sequi hic autem quos animi nostrum molestiae non harum labore, sit veritatis ea? Tempore, suscipit veniam necessitatibus quisquam ad minus sunt eos voluptate odit et velit, error deserunt, aliquam voluptas. Dolore ab obcaecati rem consequatur ipsum sapiente iusto quibusdam soluta et temporibus id ducimus repellendus, amet, quod reprehenderit earum facilis! Nulla, consectetur quisquam rerum officia atque nemo blanditiis architecto distinctio fugiat. Rem, dolores! Delectus, earum laudantium quibusdam ducimus aut culpa officia ab itaque eveniet nulla voluptate quia tempore, ratione voluptas magni nemo a consequuntur. Veniam quas, pariatur officia ab eveniet qui temporibus eum nisi odit iste commodi recusandae consequuntur error! Nostrum labore molestias dicta, qui animi consectetur molestiae aspernatur mollitia doloremque quo eius ad et soluta, tempora maiores quaerat quae natus delectus magni! Ea eveniet cumque dicta assumenda. Impedit odit aliquid quaerat itaque, fuga ut labore laboriosam culpa voluptas minus. Vitae natus nemo itaque veritatis magni? Natus reprehenderit aut veniam libero cum, corrupti provident sunt repudiandae doloremque sapiente distinctio corporis veritatis aliquam vel dignissimos reiciendis odit aspernatur eum soluta illo molestias nemo? Recusandae veritatis ab eveniet ad porro atque deleniti consequuntur tenetur. Temporibus voluptatum mollitia pariatur, obcaecati commodi expedita non vero corporis in esse? Cupiditate placeat illum doloribus rem suscipit at minima, commodi consequatur nam ducimus. Ducimus sint nesciunt laboriosam nisi architecto id voluptatum, rem facere nemo, quod iure ab sequi consectetur. Architecto neque, laudantium aspernatur perferendis minima harum pariatur culpa veritatis eius, corrupti ipsum porro labore laborum sint sed est quae id dolore ratione ducimus perspiciatis placeat. Excepturi cum qui quos facere impedit quae nisi animi quam libero dicta esse adipisci ut, magnam sint neque ipsam fugiat tempore eaque unde fugit doloremque architecto placeat nobis amet. Debitis ad, eius eum ratione tempore ullam qui quos, pariatur aliquam architecto, modi maiores. Optio ipsum adipisci illo eius. Earum quisquam, cupiditate voluptatem hic harum dolorem fugit reiciendis sed non beatae ad? Ab deleniti blanditiis at. Quae voluptatem tempora nihil magni ab provident adipisci voluptatibus velit officia, repellendus error doloribus porro repudiandae? Dolorum mollitia incidunt excepturi eaque necessitatibus quidem sed assumenda ipsum aspernatur? Illo molestias, voluptatem consequuntur magnam at quis eius blanditiis distinctio aliquid nobis perferendis qui placeat quaerat debitis pariatur laborum labore. Quas aperiam, ut porro suscipit expedita nesciunt, aut, iure ullam repudiandae quia eaque voluptates facilis blanditiis deleniti et laboriosam? Ad eligendi rerum, maiores nesciunt asperiores fuga, quod, aliquid omnis hic repellendus obcaecati optio aperiam totam voluptatibus dicta? Rem consequuntur architecto fugit sint? Culpa autem modi officia nam impedit ea magnam sit sunt ipsa vitae necessitatibus odit eum, rerum, numquam pariatur accusamus soluta, possimus magni distinctio dignissimos a ipsam corrupti itaque cum. Dolorum doloribus necessitatibus explicabo recusandae libero magni animi nemo atque amet accusantium earum repudiandae aperiam dignissimos maiores consectetur autem nesciunt, quod excepturi harum totam eum sed praesentium obcaecati. Velit architecto repellendus similique, esse doloribus minima sapiente voluptas quaerat ducimus, illo ut error consequatur tenetur veritatis?
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur nemo tempore laudantium pariatur fuga officia nisi maxime earum, obcaecati animi qui, nobis, quaerat optio. Nihil, deleniti. Neque, aspernatur maiores?
			</Container>
		</Box>

	);
};

export default React.memo(Main);