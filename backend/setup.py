# -*- coding: utf-8 -*-

from setuptools import setup, find_packages

with open("README.rst") as f:
    readme = f.read()

with open("LICENSE") as f:
    license = f.read()

setup(
    name="readIT-API",
    version="0.1.4",
    description="",
    long_description=readme,
    author="Anton Levholm",
    #    author_email='',
    #    url='',
    license=license,
    packages=find_packages(exclude=("tests", "docs")),
    # setup_requires=['pytest-runner', ...],
    tests_require=["pytest"],
    install_requires=["flask", "requests", "psycopg2", "pytest", "responses"],
)
