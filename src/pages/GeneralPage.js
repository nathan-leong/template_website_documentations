import React, {useEffect, useState} from 'react';
import Layout from '../components/Layout';
import loadContent from '../utils/loadContent'
import ReactMarkdown from 'react-markdown/with-html'
import '../App.css'
import formatSideMenu from '../utils/formatSideMenu';
import getPresignedUrl from '../utils/getPresignedUrl'
import retrieveImagesS3 from '../utils/retrieveImagesS3';

function GeneralPage(props) {
  const [pageContent, setPageContent] = useState(null)
  const currentPage = props.location.pathname
  useEffect(() => {
    const getMarkdownFile = async () => {
      try {
        const mdFile = await getPresignedUrl(currentPage.replace("/","") + ".md")
        loadContent(mdFile, setPageContent)
      } catch (err) {
      }
      return false
    }
    currentPage!== "/" && getMarkdownFile()
  })
  if(pageContent){
    retrieveImagesS3()
  }
  return (
    <Layout>
      {/* <Banner color='white'>
        <Tile>
          <img src={tileImage}/>
          <h3>Responsible Lending</h3>
        </Tile>
        
      </Banner> */}
      {pageContent &&
        (
          <div>
            <h1>{formatSideMenu(currentPage)}</h1>
            <ReactMarkdown
              source={pageContent}
              escapeHtml={false}
            />
          </div>
        )
      }
    </Layout>
  );
}

export default GeneralPage;
