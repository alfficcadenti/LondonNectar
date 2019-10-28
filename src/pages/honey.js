import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Honey = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
    <h1>{'But What Is Honey?'}</h1>

<p>{'Well, I’m sure that if you ended up on this website you already know what honey is. But you may not know that:'}</p>

    <p>{'Honey is a sweet, thick liquid made by honeybees that collect the sugar-rich nectar from flowers, reduce the moisture content from about 70% to 20% and add natural enzymes. The smell, color and taste depend on the type of flowers visited by the bees.'}</p>
    <p>{'Honey has been linked to several health benefits and has been used as a folk remedy throughout history for medical uses, even used in some hospitals as a treatment for wounds.'}</p>
    <p>{'Nutritionally, 1 tablespoon of honey (21 grams) contains 64 calories and 17 grams of sugar, including fructose, glucose, maltose, sucrose and doesn’t contains virtually no fiber, fat or protein. It also contains several vitamins and minerals, bioactive plant compounds and antioxidants.'}</p>
    <p>{`These antioxidants have been linked to reduced risk of heart attacks, strokes and some types of cancer. They may also promote eye health and seems to have a positive effect on cholesterol levels. `}(<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3005390/" target="_blank" rel="noopener noreferrer">1</a>,<a href="https://www.ncbi.nlm.nih.gov/pubmed/25226738" target="_blank" rel="noopener noreferrer">2</a>)</p>
    <p>{'Many of these health benefits are specific to pure, raw (or unpasteurized), honey.'}</p>

    <h1>{'Why Pure?'}</h1>

<p>{'Honey is so popular, but it’s hard to meet this high demand from local suppliers alone.'}</p>

<p>{'In the UK, only 7% of the honey sold is from British bees. Regular commercial/industrial honey may have hidden sugars or sweeteners that are added by manufacturers to dilute the honey and reduce the costs.'}</p>

<p>{'Moreover, as demonstrated from an unofficial study that analyzed 60 samples of commercial honey brands, over 75% of all samples contained no pollen.'}</p>
<h1>{'Why Raw'}</h1>

<p>{'Raw honey is best described as honey “as it exists in the beehive”. In fact, with our mechanical technique we are able to extract the honey from the honeycombs pouring it over a mesh to separate the honey from impurities like beeswax. We don’t perform any other process that can alter the properties of the honey. Pasteurization and/or filtration, for example, which are typically included in the industrial honey production, further refines it to make it more transparent and smooth, but they can also remove beneficial nutrients like pollen, enzymes, antioxidants and destroy the yeast found in honey. '} 
  (<a href='https://www.tandfonline.com/doi/abs/10.1080/10942910600981708' target="_blank" rel="noopener noreferrer">3</a>,
  <a href='https://www.sciencedirect.com/science/article/pii/S0308814605003262' target="_blank" rel="noopener noreferrer"> 4</a>,
  <a href='https://www.jstage.jst.go.jp/article/membrane1976/29/1/29_1_58/_article' target="_blank" rel="noopener noreferrer"> 5</a>)
</p>

<h1>{'Why Local'}</h1>

<p>{'Bees use pollen from the same flowers and trees that make you sneeze and sniffle in the spring and fall. When you eat honey produced by local bees, you’re eating some of the allergens that make your eyes water and your nose run. Over time, your body builds up immunity to these allergens so your seasonal allergies won’t be as severe.'}</p>

<p>{'Are the cities a better environment to keep the honeybees?'}</p>
<p>{'With the a milder climate and a wider range of food than the countryside, urban centers are becoming havens for bee population far from the uses of pesticides in the intensive agriculture in the farm land. '}
(<a href='https://www.city.ac.uk/news/2016/september/the-first-city-honey-harvest' target="_blank" rel="noopener noreferrer">6</a>)
</p>

<p>{'“Apart from crops such as oilseed rape and field beans, there are precious few pollen sources around for bees and other insects in modern arable farmland and surprisingly little in areas specialising in dairy, beef or sheep production,”. '}
(<a href='https://www.theguardian.com/environment/2010/aug/17/bees-urban-pollen-diet' target="_blank" rel="noopener noreferrer">7</a>)
{'This is leading to an increasing in urban beekeepers due to the more diversity of flowers in cities, with gardens, parks, railway sidings all planted with different species, and for this reason, bees in urban environments with a variety of foraging sources, play also a vital role in conservation and pollination.'}
(<a href='https://www.manchester.ac.uk/discover/magazine/features/defending-the-bee/' target="_blank" rel="noopener noreferrer">8</a>)
</p>

<p>{'Is urban honey as good as honey produced in farm land?'}</p>
<a href='https://www.manchester.ac.uk/discover/magazine/features/defending-the-bee/' target="_blank" rel="noopener noreferrer">
  <p>
    {'Just check this research 😉'}
  </p>
</a>
</div>
    
  </Layout>
)

export default Honey
