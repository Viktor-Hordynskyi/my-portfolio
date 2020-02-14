class PortfolioService {
  _baseUrl = `${process.env.REACT_APP_URL}`;

  async getResource(url) {
    const res = await fetch(`${this._baseUrl}${url}`);
    if (!res.ok) {
      throw new Error(`Cound not fetch ${url} received ${res.status}`);
    }
    return await res.json();
  }

  getData = async data => {
    try {
      return await this.getResource(data);
    } catch (error) {
      throw new Error(error.message);
    }
  };
  getAllSkills = async () => {
    try {
      return await this.getResource("skills");
    } catch (error) {
      throw new Error(error.message);
    }
  };
  getAllProjects = async () => {
    try {
      return await this.getResource("projects");
    } catch (error) {
      throw new Error(error.message);
    }
  };
  postMail = async () => {
    try {
      return await this.getResource("projects");
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export default new PortfolioService();
