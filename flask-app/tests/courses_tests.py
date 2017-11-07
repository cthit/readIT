from readIT_API import app, config
import pytest, json


@pytest.yield_fixture
def client():
    """A Flask test client. An instance of :class:`flask.testing.TestClient`
    by default.
    """
    with app.test_client() as client:
        yield client


def test_get_courses(client):
	response = client.get(f"{config.api_server}/courses")
	data = json.loads(response.text)
	assert response.status == '200 OK'
	assert data is not None
	assert 'courses' in data
	assert len(data['courses']) > 0
	for course in data['courses']:
		assert 'id' in course
		assert 'code' in course
		assert 'name' in course
		assert 'description' in course
		assert 'type' in course
		assert 'periods' in course
		assert 'blocks' in course